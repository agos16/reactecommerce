export const ItemDetail = ({item}) => {
    return (
        <>
        <h1>{item.tittle}</h1>
        <img src={item.pictureUrl} />
        <div></div>
        </>
    )
}