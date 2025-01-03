interface Props {
    inputId: string;
    isVisible: boolean;
    listBoxId: string;
    totalLength: number;
}
declare const usePosition: ({ inputId, isVisible, listBoxId, totalLength }: Props) => {
    handlePosition: () => void;
    isTop: () => boolean;
    left: number;
    marginTop: number;
    maxWidth: number;
    top: number;
};
export default usePosition;
