import {MantineProvider, Text} from "@mantine/core";

function App() {
    return (
        <MantineProvider withGlobalStyles withNormalizeCSS>
            <Text>Welcome to the Dashboard!</Text>
        </MantineProvider>
    );
}

export default App
