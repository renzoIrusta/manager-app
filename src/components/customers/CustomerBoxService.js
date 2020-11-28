import React from 'react';

export const CustomerBoxService = ({ service }) => {
    return (
        <div
            className="box box__service"
            key={service.id}
        >
            <article className="media">
                <div className="media-left">
                    {/* <p>{service.date}</p> */}
                    <figure className="image box__service-image mb-1">
                        <img
                            src={service.servicePhotoUrl ? service.servicePhotoUrl : "https://bulma.io/images/placeholders/128x128.png"}
                            alt="service"
                        />
                    </figure>
                </div>
                <div className="media-content">
                    <p><strong>{service.name}</strong></p>
                    <p>{service.textarea}</p>
                </div>
            </article>
        </div>
    )
}
