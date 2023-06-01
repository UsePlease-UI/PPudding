import Table from 'components/atoms/Table';
import TableBody from 'components/atoms/TableBody';
import TableCaption from 'components/atoms/TableCaption';
import TableCell from 'components/atoms/TableCell';
import TableHead from 'components/atoms/TableHead';
import TableRow from 'components/atoms/TableRow';

export default function TableExample() {
    return (
        <Table aria-label="table-example">
            <TableCaption>A basic table example with a caption</TableCaption>
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
                    <TableCell colSpan={2} align="center">
                        망고
                    </TableCell>
                    <TableCell>망고고고고고고고고고</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );
}
