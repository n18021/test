// ユーザーログインの実装
import { login } from './ButterflyEffect/firebase';

// ... 省略

    // ユーザーログインのメソッド
    login = () => {
        const { email, password } = this.state;
        login(email, password);
    }
