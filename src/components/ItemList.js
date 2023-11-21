import { Item }from './Item';

export const Itemlist = ({items}) => {

return items.map ((item)=> <Item key = {item.id} item = {item} />);
}