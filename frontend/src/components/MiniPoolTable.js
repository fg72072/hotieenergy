import {Table } from "react-bootstrap";


function Minipooltable(){

return(

    <>
    <div className="table-responsive">
        <Table className="stake-table">
            <thead>
            <tr>
                <th>N</th>
                <th>User Wallet Address</th>
                <th>Hest - Stake Balance</th>
                <th style={{ whiteSpace: "pre" }}>lorem ipsum del lora</th>
            </tr>
            </thead>

            <tbody>
            <tr>
                <td>1</td>
                <td className="ellipsis">0x2030304141414055060670</td>
                <td>40,000.0</td>
                <td>3,400.0</td>
            </tr>

            <tr>
                <td>1</td>
                <td className="ellipsis">0x2030304141414055060670</td>
                <td>40,000.0</td>
                <td>3,400.0</td>
            </tr>

            <tr>
                <td>1</td>
                <td className="ellipsis">0x2030304141414055060670</td>
                <td>40,000.0</td>
                <td>3,400.0</td>
            </tr>

            <tr>
                <td>1</td>
                <td className="ellipsis">0x2030304141414055060670</td>
                <td>40,000.0</td>
                <td>3,400.0</td>
            </tr>
            </tbody>
        </Table>
        </div>
    </>
)



}

export default Minipooltable;
