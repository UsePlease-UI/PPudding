import Card from './Card';
import CardActions from './CardActions';
import CardHeader from './CardHeader';
import CardMedia from './CardMedia';
import CardSupportingVisual from './CardSupportingVisual';
import CardText from './CardText';
import CardTitle from './CardTitle';

// Component Export
export default Object.assign(Card, {
  Actions: CardActions,
  Header: CardHeader,
  Media: CardMedia,
  SupportingVisual: CardSupportingVisual,
  Text: CardText,
  Title: CardTitle,
});

// Types Export
export type { CardType } from './Card';
export type { CardActionsType } from './CardActions';
export type { CardHeaderType } from './CardHeader';
export type { CardMediaType } from './CardMedia';
export type { CardSupportingVisualType } from './CardSupportingVisual';
export type { CardTextType } from './CardText';
export type { CardTitleType } from './CardTitle';
