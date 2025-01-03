import Card from './Card';
import CardActions from './CardActions';
import CardHeader from './CardHeader';
import CardMedia from './CardMedia';
import CardSupportingVisual from './CardSupportingVisual';
import CardText from './CardText';
import CardTitle from './CardTitle';

export default Object.assign(Card, {
  Actions: CardActions,
  Header: CardHeader,
  Media: CardMedia,
  SupportingVisual: CardSupportingVisual,
  Text: CardText,
  Title: CardTitle,
});
