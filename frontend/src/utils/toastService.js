let toastListeners = [];

export function triggerStateToast(type, customTitle, customMessage) {
  const toastObj = {
    id: `toast-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
    type: type || 'success',
    title: customTitle,
    message: customMessage
  };
  toastListeners.forEach((fn) => fn(toastObj));
}

export function subscribeStateToast(fn) {
  toastListeners.push(fn);
  return () => {
    toastListeners = toastListeners.filter((listener) => listener !== fn);
  };
}
