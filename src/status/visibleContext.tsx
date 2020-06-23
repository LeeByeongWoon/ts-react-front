import React, { useState, useCallback, useContext, createContext } from "react";

// context 선언
const UsersVisibleContext = createContext<null | boolean>(null);
const UsersChangeContext = createContext<any>(null);

//provider로 값을 내보내기
export function UsersProvider({ children }: { children: React.ReactNode }) {
    const [visible, setVisible] = useState(true);
    // vislble 여부를 수정하는 함수
    const change = useCallback((value: boolean) => {
        setVisible(value);
    }, [])
    return (
        <UsersVisibleContext.Provider value={visible}>
            <UsersChangeContext.Provider value={change}>
                {children}
            </UsersChangeContext.Provider>
        </UsersVisibleContext.Provider>
    );
}
// custom hooks
export function useUsersVisible() {
    const visible = useContext(UsersVisibleContext);
    // 값이 falsy한 값이라 !visible로 체크가 안됨
    if (visible === null || visible === undefined) {
        throw new Error("Cannot find UserProvider");
    }
    return visible;
}
// custom hooks
export function useUsersSetVisible() {
    const setvisible = useContext(UsersChangeContext);
    // 값의 유효성 검사
    if (!setvisible) {
        throw new Error("Cannot find UserProvider" + setvisible);
    }
    return setvisible;
}