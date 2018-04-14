import { Vue } from 'vue-property-decorator';
export default class HelloDecorator extends Vue {
    name: string;
    is18: boolean;
    age: number;
    zodiac: number;
    arr: number[];
    updateAge(): void;
    created(): void;
}
