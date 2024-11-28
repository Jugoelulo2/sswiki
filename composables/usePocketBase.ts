// Using ES modules (default)
import PocketBase from 'pocketbase'

const usePocketBase = () => {
    const pb = new PocketBase(process.env.POCKETBASE_URL);

    return pb;
}

export default usePocketBase;

