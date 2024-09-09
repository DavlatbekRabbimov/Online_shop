import React, {createContext, useContext} from "react";

const GalleryContext = createContext();
export const GalleryProvider = ({children}) => {

    // --------------- HOME GALLERY --------------- //

    const clothesImages = [
        'https://s.alicdn.com/@sc04/kf/Hd0fdad39d73d4c0d86e49e73d5fea2abF.jpg_720x720q50.jpg',
        'https://s.alicdn.com/@sc04/kf/H2c32931e10664e8390d05e80bb2645c6R.jpg_720x720q50.jpg',
        'https://s.alicdn.com/@sc04/kf/H621a6919045a4a1da05c29f22c5c57fek.jpg_720x720q50.jpg',
        'https://s.alicdn.com/@sc04/kf/H6f385ebfcbc049fabf8af6d3900223c2w.jpg_720x720q50.jpg'
    ]
    const jewelryImages = [
        'https://s.alicdn.com/@sc04/kf/Hb8b18ec9b21e4c5a9681f02747bb767el.jpg_720x720q50.jpg',
        'https://s.alicdn.com/@sc04/kf/Heb37a9a08b5540229a07a824e1622d39W.jpg_720x720q50.jpg',
        'https://s.alicdn.com/@sc04/kf/Haac700d91f9a46798e10abc749a6ba55P.jpg_720x720q50.jpg',
        'https://s.alicdn.com/@sc04/kf/H4381c171460e4c41bd103b8a9cb5967fX.jpg_720x720q50.jpg'
    ]

    const techniquesImages = [
        'https://s.alicdn.com/@sc04/kf/H1d7131d61bde4f3e99f4534a19ad9be3T.jpg_720x720q50.jpg',
        'https://s.alicdn.com/@sc04/kf/Hb93cba25bf0a4faeac6183608b3cc23b2.jpg_720x720q50.jpg',
        'https://s.alicdn.com/@sc04/kf/H5907a9d9b8c3474f9846669470bf8acei.jpg_720x720q50.jpg',
        'https://s.alicdn.com/@sc04/kf/H81ad49fca9e94d61bca0dbaa5488ff4ee.jpg_720x720q50.jpg'
    ]

    const foodsImages = [
        'https://s.alicdn.com/@sc04/kf/H2dd6def41b5a48fd89bd3edef3b9283aj.jpg_720x720q50.jpg',
        'https://s.alicdn.com/@sc04/kf/H39c9ce7895964b62b07907f19d2aab33O.png_720x720q50.png',
        'https://s.alicdn.com/@sc04/kf/H6112a9d979bd4a5595f0fd0e29b9a85cu.jpg_720x720q50.jpg',
        'https://s.alicdn.com/@sc04/kf/He6ec403082c8410c89f9e00823d0277dZ.jpg_720x720q50.jpg'
    ]

    const giftsImages = [
        'https://s.alicdn.com/@sc04/kf/H0381be6bbea9484dbf99fd1ab3392e0by.jpg_720x720q50.jpg',
        'https://s.alicdn.com/@sc04/kf/H138405f9f60b4fbb9e1235268c7a7bbaf.png_720x720q50.png',
        'https://s.alicdn.com/@sc04/kf/H92244d193d5540c99f75eb90a496cb66f.jpg_720x720q50.jpg',
        'https://s.alicdn.com/@sc04/kf/H51eccd0b814148639da595bcd90146c7u.png_720x720q50.png'
    ]

    // --------------- CLOTHES GALLERY --------------- //

    const menImages = [
        'https://s.alicdn.com/@sc04/kf/Hd0fdad39d73d4c0d86e49e73d5fea2abF.jpg_720x720q50.jpg',
        'https://s.alicdn.com/@sc04/kf/H5d890afe3cb543f1be93dd679c9d48f4E.jpg_720x720q50.jpg',
        'https://s.alicdn.com/@sc04/kf/Hb82b7cdcceb04031a64ed45f43d8c85fv.jpg_720x720q50.jpg',
        'https://s.alicdn.com/@sc04/kf/Ha4f72944817a4563a96b4e6457db8126c.jpg_720x720q50.jpg'
    ]
    const womenImages = [
        'https://s.alicdn.com/@sc04/kf/H07a55126c3ba482aa7fd9a58fef41e5cV.jpg_720x720q50.jpg',
        'https://s.alicdn.com/@sc04/kf/H7caef29558904f89aa6f174521ee45795.jpg_720x720q50.jpg',
        'https://s.alicdn.com/@sc04/kf/H1923b1091ddf442eb054ac430ab89774v.jpg_720x720q50.jpg',
        'https://s.alicdn.com/@sc04/kf/He22cde77e4684f889536e1ae91a773f27.jpg_720x720q50.jpg'
    ]

    const kidsImages = [
        'https://s.alicdn.com/@sc04/kf/H1352cebfd9e74a42a5c64719d902914bu.jpg_720x720q50.jpg',
        'https://s.alicdn.com/@sc04/kf/H2d458012470b4f4a8bb7e2562640f6923.jpg_720x720q50.jpg',
        'https://s.alicdn.com/@sc04/kf/H496321a7498b47eebb46bb05c3860e8em.jpg_720x720q50.jpg',
        'https://s.alicdn.com/@sc04/kf/Hc83bc9517c8f437c9efe4e7396cfee96l.jpg_720x720q50.jpg'
    ]

    const animalsImages = [
        'https://s.alicdn.com/@sc04/kf/H5341e295b7fa4086b4887c9f303f685dh.jpg_720x720q50.jpg',
        'https://s.alicdn.com/@sc04/kf/H32385dab35db421f963225494be47beea.jpg_720x720q50.jpg',
        'https://s.alicdn.com/@sc04/kf/Hfd593776c3df4532986761887c36f5332.jpg_720x720q50.jpg',
        'https://s.alicdn.com/@sc04/kf/H4e2f0a955f804a2ba2542d03b5ba5053T.jpg_720x720q50.jpg'
    ]

    // --------------- CLOTHES-MAN GALLERY --------------- //

    const mShirtsImages = [
        'https://s.alicdn.com/@sc04/kf/Hd0fdad39d73d4c0d86e49e73d5fea2abF.jpg_720x720q50.jpg',
        'https://s.alicdn.com/@sc04/kf/Hf7aa21e05bbc4784b1371d4dc6b32a12m.png_720x720q50.png',
        'https://s.alicdn.com/@sc04/kf/Hf99a48cbbca14b3b8a02ea3ff9f687acE.jpg_720x720q50.jpg',
        'https://s.alicdn.com/@sc04/kf/Ue07dc5d626004a848c9e02b834bf527bo.jpg_720x720q50.jpg'
    ]
    const mJacketsImages = [
        'https://s.alicdn.com/@sc04/kf/H6980aef2d08b44868c981be6e5fba42ei.jpg_720x720q50.jpg',
        'https://s.alicdn.com/@sc04/kf/Hac31837de8614e6f816274f5bf89d6565.jpg_720x720q50.jpg',
        'https://s.alicdn.com/@sc04/kf/H0f8556c4a7394e70911752c0fbc0d675P.jpg_720x720q50.jpg',
        'https://s.alicdn.com/@sc04/kf/H035101e2696b42e88500241cb116076fk.jpg_720x720q50.jpg'
    ]

    const mSportsImages = [
        'https://s.alicdn.com/@sc04/kf/Hbf76ce7e7f8a449dbe8f67a52b839c21G.jpg_720x720q50.jpg',
        'https://s.alicdn.com/@sc04/kf/H362c821c5d2e494b88a5bf8851dffd47w.jpg_720x720q50.jpg',
        'https://s.alicdn.com/@sc04/kf/H7d352cd16a0e40fd8feaadab1ae6aa08w.jpg_720x720q50.jpg',
        'https://s.alicdn.com/@sc04/kf/H394738604eba4986a31353c241b217d5H.jpg_720x720q50.jpg'
    ]

    const mShoesImages = [
        'https://s.alicdn.com/@sc04/kf/H7e8520b159ec429395b229d238cca356S.jpg_720x720q50.jpg',
        'https://s.alicdn.com/@sc04/kf/H3a82885cf9e646408879ae967b20defeP.jpg_720x720q50.jpg',
        'https://s.alicdn.com/@sc04/kf/H49c4f2f0c561495bb448d12d1ef4ed7e4.jpg_720x720q50.jpg',
        'https://s.alicdn.com/@sc04/kf/H558fe7c424b84c16ba802b597d06bde2j.png_720x720q50.png'
    ]


    // --------------- MS-1 GALLERY --------------- //

    const shirtImages= [
            'https://s.alicdn.com/@sc04/kf/Hb9ec99d15ffa49bda50d060d23b2cffaR.jpeg_720x720q50.jpeg',
            'https://s.alicdn.com/@sc04/kf/Heb8b32b35b4841c4bb2d0e0b9a2f1d908.jpeg_720x720q50.jpeg',
            'https://s.alicdn.com/@sc04/kf/H9f6b330b39934b39803f761b26507561C.jpeg_720x720q50.jpeg',
            'https://s.alicdn.com/@sc04/kf/H7cb81d6a1864492291bc5af3cc770362r.jpeg_720x720q50.jpeg'
        ];

    const startGallery = {
        clothesImages, jewelryImages, techniquesImages, foodsImages, giftsImages,
        menImages, womenImages, kidsImages, animalsImages,
        mShirtsImages, mJacketsImages, mSportsImages, mShoesImages,
        shirtImages,
    }

    return (
        <GalleryContext.Provider value={{startGallery}}>
            {children}
        </GalleryContext.Provider>
    );
}

export function useGallery() {
    return useContext(GalleryContext);
}
