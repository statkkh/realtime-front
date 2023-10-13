export default interface ReceiveMessage{
    map(arg0: (item: any) => any): unknown;
    nickname : string;
    message : string;
}