export default function Startupcard(post){
    const dateObject = new Date(post.datePublished);
    const options: Intl.DateTimeFormatOptions = {
      month: "short",
      day: "numeric",
      year: "numeric",
    };
    const 
    const formattedDate = dateObject.toLocaleDateString("en-US", options);
    return(
        <>
            <li className="startup_card">
                <div className="flex-between">
                    <p className="startup_card_date">
                        {formattedDate}
                    </p>
                    <div className="flex-between mt-5 gap-5">

                    </div>
                </div>
            </li>

        </>
    )
}