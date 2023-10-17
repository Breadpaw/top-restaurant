import tabLoader from '../tab'
import contentClearer from '../helpers/contentClearer';

export default function menuLoader() {
    contentClearer();
    tabLoader();
}