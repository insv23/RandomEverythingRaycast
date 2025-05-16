import { ActionPanel, List, Action, Icon } from "@raycast/api";
import { useState } from "react";

interface GeneratorItemProps {
	title: string;
	generator: () => string;
}

export const GeneratorItem = ({ title, generator }: GeneratorItemProps) => {
	const [value, setValue] = useState(generator());

	return (
		<List.Item
			title={title}
			subtitle={value}
			actions={
				<ActionPanel>
					<Action.CopyToClipboard
						icon={Icon.Clipboard}
						title="Copy"
						content={value}
					/>
					<Action
						title={`Generate New Random ${title}`}
						onAction={() => setValue(generator())}
						shortcut={{ modifiers: ["cmd"], key: "g" }}
					/>
				</ActionPanel>
			}
		/>
	);
};
