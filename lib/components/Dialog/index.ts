import DialogAction from './DialogAction';
import DialogContent from './DialogContent';
import DialogDescription from './DialogDescription';
import DialogFocusManager from './DialogFocusManager';
import DialogRoot from './DialogRoot';
import DialogTitle from './DialogTitle';
import DialogTrigger from './DialogTrigger';

// Component Export
export default Object.assign(DialogRoot, {
  Action: DialogAction,
  Content: DialogContent,
  Description: DialogDescription,
  FocusManager: DialogFocusManager,
  Title: DialogTitle,
  Trigger: DialogTrigger,
});

// Types Export
export type { DialogRootType } from './DialogRoot';
export type { DialogTriggerType } from './DialogTrigger';
export type { DialogFocusManagerType } from './DialogFocusManager';
export type { DialogContentType } from './DialogContent';
export type { DialogTitleType } from './DialogTitle';
export type { DialogDescriptionType } from './DialogDescription';
export type { DialogActionType } from './DialogAction';
