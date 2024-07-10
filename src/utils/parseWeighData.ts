import { WeighingData } from "../types/weighingData";

function parseNumberArray(input: string): number[] {
    // Remove first and last character
    const trimmed = input.slice(1, -1);
    if(trimmed === '') {
        return []
    }
    // Split by commas and convert to numbers
    const numbers = trimmed.split(',').map(num => parseInt(num.trim(), 10));
    return numbers;
}

export default function parseWeighingData(input: string): WeighingData {
    // Split on whitespace
    const parts = input.split(/\s+/);
    
    const leftSide = parseNumberArray(parts[0]);
    const operator = parts[1] as '>' | '<' | '=';
    const rightSide = parseNumberArray(parts[2]);

    return { left: leftSide, operator, right: rightSide };
}
