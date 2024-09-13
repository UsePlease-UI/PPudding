import Card from './Card';
import CardActions from './CardActions';
import CardHeader from './CardHeader';
import CardMedia from './CardMedia';
import CardSupportingVisual from './CardSupportingVisual';
import CardText from './CardText';
import CardTitle from './CardTitle';

export * from './types';
export default Object.assign(Card, {
  Header: CardHeader,
  Title: CardTitle,
  SupportingVisual: CardSupportingVisual,
  Text: CardText,
  Media: CardMedia,
  Actions: CardActions,
});
