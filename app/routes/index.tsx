import Page from "~/components/Page";
import ScrollObserver from "~/utils/ScrollObserver";

export default function Index() {
    return (
        <ScrollObserver>
            <Page />
        </ScrollObserver>
    );
}
