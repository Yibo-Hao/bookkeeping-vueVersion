type RecordItem = {
    tag: string;
    notes: string;
    type: string;
    amount: number;
    createAt?: Date;
};
type Tag = {
    id: string;
    name: string;
};
type TagsListModel = {
    data: Tag[];
    fetch: () => Tag[];
    create: (name: string) => string | void;
    save: () => void;
};