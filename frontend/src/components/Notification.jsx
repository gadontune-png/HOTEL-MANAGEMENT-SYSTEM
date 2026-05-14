function Notification({ title, message, type = 'info', onClose }) {
  const styles = {
    info: 'bg-slate-50 text-slate-800 border-slate-200',
    success: 'bg-emerald-50 text-emerald-900 border-emerald-200',
    error: 'bg-red-50 text-red-900 border-red-200',
  }

  return (
    <div className={`rounded-3xl border px-5 py-4 shadow-sm ${styles[type]}`}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-semibold text-sm text-slate-900">{title}</p>
          <p className="mt-1 text-sm leading-6 text-slate-700">{message}</p>
        </div>
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="text-slate-500 hover:text-slate-900"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  )
}

export default Notification
