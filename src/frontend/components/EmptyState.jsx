import React from 'react';

const EmptyState = ({
  message = 'No data found',
  submessage = '',
  colSpan = null,
  className = 'text-center py-20 bg-brand-ivory border border-dashed border-mistral-black/20',
  messageClassName = 'text-mistral-black/40 font-bold uppercase tracking-widest',
  submessageClassName = 'text-mistral-black/30 text-xs mt-2 uppercase tracking-wider'
}) => {
  if (colSpan) {
    return (
      <tr>
        <td colSpan={colSpan} className="p-20 text-center">
          <p className={messageClassName}>{message}</p>
          {submessage && <p className={submessageClassName}>{submessage}</p>}
        </td>
      </tr>
    );
  }

  return (
    <div className={className}>
      <p className={messageClassName}>{message}</p>
      {submessage && <p className={submessageClassName}>{submessage}</p>}
    </div>
  );
};

export default EmptyState;
