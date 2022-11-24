import { Label, Input } from './Filter.styled'

export function Filter({ filter, handleChange }) {
    return (
        <Label>Find contacts by name
            <Input
                type="text"
                name="filter"
                value={filter}
                onChange={handleChange}
            >
            </Input>
        </Label>
    )
};
