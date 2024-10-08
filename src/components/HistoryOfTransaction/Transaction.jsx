import css from './Transaction.module.css';

export default function Transactions({ items }) {
  return (
    <table className={css.table}>
      <thead>
        <tr>
          <th className={css.title}>Type</th>
          <th className={css.title}>Amount</th>
          <th className={css.title}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((trans, index) => {
          return (
            <tr key={trans.id} className={index % 2 ? css.grey : css.white}>
              <td className={css.text}>{trans.type}</td>
              <td className={css.text}>{trans.amount}</td>
              <td className={css.text}>{trans.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
