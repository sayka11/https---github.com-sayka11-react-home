interface PlaceCardProps {
    imageSrc: string;
    description: string;
    link: string;
}

export const PlaceCard = (props: PlaceCardProps) => {
    const { description, imageSrc, link } = props;
    return (
        <div className="place-card">
            <img className="niigata" src={imageSrc} alt="niigata" />
            <div className="cont-3-2">
                <div className="txt-1">{description}</div>
                <div className="button-see-more">
                    <a href={link} className="seeMore">
                        <button className="see-more">SEE MORE</button></a>
                </div>
            </div>
        </div>
    );
}