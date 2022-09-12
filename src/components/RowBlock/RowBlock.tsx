import {Container, Row, Col} from 'reactstrap'

interface IRowBlock {
    left: JSX.Element;
    right: JSX.Element;
}

function RowBlock({left, right}:IRowBlock) {
    return (
        <Row>
        <Col md="6" >
         {left}
        </Col>
        <Col md="6">
            {right}
        </Col>
      </Row>
    )
}

export default RowBlock;