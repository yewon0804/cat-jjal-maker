const MainCard = ({ img, onHeartClick, alreadyFavorite }) => {
    const heartIcon = alreadyFavorite ? "đ" : "đ¤";
    return (
        <div className="main-card">
            <img src={img} alt="ęł ěě´" />
            <button onClick={onHeartClick}>{heartIcon}</button>
        </div>
    );
};

export default MainCard;