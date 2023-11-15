export const Itemlist = ({items}) => {

    return items.map (item => <Item item = {item} />)
}