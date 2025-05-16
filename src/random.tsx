import { List } from "@raycast/api";
import { GeneratorItem } from "./components/GeneratorItem";
import {
	generateUsername,
	generatePassword,
	generateToken,
	generatePort,
} from "./utils/generators";

export default function Command() {
	return (
		<List>
			<GeneratorItem title="Username" generator={generateUsername} />
			<GeneratorItem title="Password" generator={generatePassword} />
			<GeneratorItem title="Token" generator={generateToken} />
			<GeneratorItem title="Port" generator={generatePort} />
		</List>
	);
}
