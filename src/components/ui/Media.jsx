import { useState } from "react"

export default function Media({ src, alt, className }) {
    const [mediaViewer, setMediaViewer] = useState(false)

    return (
        <>
            {mediaViewer ? (
                <>
                    <div className="mediaViewer">
                        <i
                            class="mediaViewer__close fa fa-times"
                            aria-hidden="true"
                            onClick={() => setMediaViewer((prev) => !prev)}
                        ></i>
                        <img
                            src={src}
                            alt={alt}
                            className="mediaViewer__image"
                        />
                        <div className="mediaViewer__blackScreen"></div>
                    </div>
                    <img src={src} alt={alt} className={className} />
                </>
            ) : (
                <img
                    src={src}
                    alt={alt}
                    className={className}
                    onClick={() => setMediaViewer((prev) => !prev)}
                />
            )}
        </>
    )
}
