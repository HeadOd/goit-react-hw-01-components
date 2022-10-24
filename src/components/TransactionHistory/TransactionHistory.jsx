import PropTypes from "prop-types";
import { TableHistory, TableHead, HeadLine, BodyLine, TableBody, TableItem } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return <TableHistory>
  <TableHead>
    <HeadLine>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </HeadLine>
  </TableHead>

  <TableBody>
    {items.map(item => (
      <BodyLine key={item.id}>
        <TableItem>{item.type[0].toUpperCase() + item.type.substring(1)}</TableItem>
        <TableItem>{item.amount}</TableItem>
        <TableItem>{item.currency}</TableItem>
     </BodyLine>
      ))}
  </TableBody>
</TableHistory>
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  })),
}