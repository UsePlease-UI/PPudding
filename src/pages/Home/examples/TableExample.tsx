/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import Typography from 'components/Base/Typography';
import Table from 'components/Table/Table';
import TableBody from 'components/Table/TableBody';
import TableCell from 'components/Table/TableCell';
import TableHead from 'components/Table/TableHead';
import TableRow from 'components/Table/TableRow';


const captionStyle = css({ textAlign: 'left', fontSize: 16, lineHeight: 1.5, fontWeight: 600, padding: '8px 0' });

export default function TableExample() {
    return (
        <Table aria-label="table-example" customCSS={{ margin: '20px 0' }}>
            <Typography component="caption" css={captionStyle}>
                A basic table example with a caption
            </Typography>
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
