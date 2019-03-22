import { Card } from 'antd';

const { Meta } = Card;

ReactDOM.render(
  <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://citygroceryonline.com/wp-content/uploads/2015/05/boure-logo.png" />}
  >
    <Meta
      title="Boure"
      description="www.instagram.com"
    />
  </Card>,
  mountNode
);
export default Restaurant