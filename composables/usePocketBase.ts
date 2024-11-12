// Using ES modules (default)
import PocketBase from 'pocketbase'

const usePocketBase = () => {
    const pb = new PocketBase('https://sswiki.pockethost.io');

    return pb;
}

export default usePocketBase;

