// Error
export class Left<L> {
    readonly value: L;
    constructor(value: L) {
        this.value = value;
    }

    isLeft(): this is Left<L> {
        return true;
    }

    isRight(): this is Right<unknown> {
        return false;
    }
}

// Success
export class Right<R> {
    readonly value: R;

    constructor(value: R) {
        this.value = value;
    }

    isRight(): this is Right<R> {
        return true;
    }

    isLeft(): this is Left<unknown> {
        return false;
    }
}

export type Either<L, R> = Left<L> | Right<R>;



export const left = <L, R>(value: L): Either<L, R> => {
    return new Left(value);
}

export const right = <L, R>(value: R): Either<L, R> => {
    return new Right(value);
}