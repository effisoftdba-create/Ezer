/**
 * Database & API Query Optimization Module
 * 
 * AUDIT REPORT: N+1 QUERY PROBLEMS IDENTIFIED & RESOLVED
 * 
 * Antipattern (N+1 Query Issue):
 * ------------------------------
 * BEFORE:
 * async function getLeadsWithCourseDetails(leads) {
 *   const result = [];
 *   for (const lead of leads) {
 *     // EXECUTING 1 DB QUERY PER ITEM IN A LOOP -> N+1 DB OVERHEAD!
 *     const { data: course } = await supabase
 *       .from('courses')
 *       .select('*')
 *       .eq('title', lead.course)
 *       .single();
 *     result.push({ ...lead, courseDetail: course });
 *   }
 *   return result;
 * }
 * 
 * Solution (Batching with Supabase .in() Filter / SQL JOIN):
 * --------------------------------------------------------
 * AFTER (Single Batch Query):
 * async function getLeadsWithCourseDetailsBatched(leads, supabaseClient) {
 *   if (!leads || leads.length === 0) return [];
 *   
 *   const courseNames = [...new Set(leads.map(l => l.course).filter(Boolean))];
 *   
 *   // SINGLE DATABASE CALL FOR ALL UNIQUE COURSES USING .in()
 *   const { data: courses, error } = await supabaseClient
 *     .from('courses')
 *     .select('*')
 *     .in('title', courseNames);
 *     
 *   if (error) {
 *     console.error('Error fetching courses in batch:', error);
 *     return leads;
 *   }
 *   
 *   const courseMap = new Map(courses.map(c => [c.title, c]));
 *   
 *   // FAST IN-MEMORY HASH LOOKUP (O(1)) WITHOUT EXTRA NETWORK/DB ROUNDTRIPS
 *   return leads.map(lead => ({
 *     ...lead,
 *     courseDetail: courseMap.get(lead.course) || null
 *   }));
 * }
 */

/**
 * Batched Fetch for Supabase Database Queries
 */
export async function batchFetchRelatedData(items, foreignKey, targetTable, targetColumn = 'id', supabaseClient = null) {
  if (!items || items.length === 0) return [];

  const keys = [...new Set(items.flatMap(item => item[foreignKey] ? [item[foreignKey]] : []))];
  if (keys.length === 0) return items;

  if (supabaseClient) {
    const { data: relatedRecords, error } = await supabaseClient
      .from(targetTable)
      .select('*')
      .in(targetColumn, keys);

    if (error) {
      console.error(`[dbQueries] Error fetching ${targetTable} batch:`, error);
      return items;
    }

    const recordMap = new Map(relatedRecords.map(r => [r[targetColumn], r]));
    return items.map(item => ({
      ...item,
      [targetTable]: recordMap.get(item[foreignKey]) || null
    }));
  }

  return items;
}
