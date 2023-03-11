import RobotoMono from '../public/static/roboto-mono/Roboto Mono Light_Regular.json';

interface Glyph {
    _cachedOutline: string[];
    ha: number;
    o: string;
}

interface FontData {
    boundingBox: {
        yMax: number;
        yMin: number;
    };
    familyName: string;
    glyphs: Record<string, Glyph>;
    resolution: number;
    underlineThickness: number;
}

interface FontsType {
    RobotoMono: FontData;
}

const Fonts: FontsType = {
    // @ts-expect-error `_cachedOutline` is expected on type Glyph, but not present in some files.
    RobotoMono,
};

export default Fonts;
