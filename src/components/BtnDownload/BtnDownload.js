import {useSelector} from "react-redux";
import mergeImages from "merge-images";

const BtnDownload = () => {
    const {defaultImage} = useSelector(state => state.images);

    const result = Object.entries(defaultImage)
        .map(entry => ({[entry[0]]: entry[1]}));

    const downloadImage = () => {
        let imageArray = [];
        result.forEach(detail => {
            let name = Object.keys(detail).toString();
            let value = Object.values(detail).toString();

            if (name !== 'nose' || value !== 'nose') {
                imageArray.push(require(`../../alpaca/${name}/${value}.png`));
            } else {
                imageArray.push(require('../../alpaca/nose.png'));
            }
        });

        mergeImages(imageArray)
            .then((b64) => {
                let a = document.createElement('a')
                a.href = b64;
                a.download = 'alpaca.png';
                a.click();
            })
    }

    return (
        <button onClick={downloadImage}>Download</button>
    )
}

export {BtnDownload};