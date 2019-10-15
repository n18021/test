import { signup } from '~/ButterflyEffect/firebase';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
    }

    // ユーザー登録のメソッド
    signUp = () => {
        const { email, password } = this.state;
        signup(email, password);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.inputWrap}>
                    <Text style={styles.label}>メールアドレス</Text>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(email) => this.setState({email})}
                        value={this.state.email}
                        placeholder="メールアドレスを入力してください"
                        placeholderTextColor="#777"
                    />
                </View>

                <View style={styles.inputWrap}>
                    <Text style={styles.label}>パスワード</Text>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(password) => this.setState({password})}
                        value={this.state.password}
                        placeholder="パスワードを入力してください"
                        placeholderTextColor="#777"
                    />
                </View>

                <View style={{paddingTop: 32}}>
                    <Button
                        title="送信"
                        onPress={() => this.signUp()} // ユーザー登録メソッドを実行
                    />
                </View>
            </View>
        )
    }
}

// ... 省略

export default Login;
