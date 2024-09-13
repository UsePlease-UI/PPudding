import { Table, TableBody, TableCell, TableHead, TableRow } from '@components/Table';

const TableExample = () => {
  return (
    <Table aria-label="제품 리스트">
      <TableHead>
        <TableRow>
          <TableCell component="th">제품명</TableCell>
          <TableCell component="th">브랜드명</TableCell>
          <TableCell component="th">설명</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell align="center">바나나</TableCell>
          <TableCell align="center">바나나차차</TableCell>
          <TableCell>바나나나나나나나나</TableCell>
        </TableRow>
        <TableRow>
          <TableCell align="center" colSpan={2}>
            망고
          </TableCell>
          <TableCell>망고고고고고고고고고</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default TableExample;
