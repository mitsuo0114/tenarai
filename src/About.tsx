import React from 'react';
import {CommonNavBar} from './component/CommonNavBar'
import {ProblemLeftNavBar} from './component/ProblemLeftNavBar';

function About() {
    return (
        <>
            <CommonNavBar/>
            <h4>このサイトについて</h4>
            <div>
                （今のところフル）クライアントサイドの数学・漢字などの練習問題を自動生成するドリルアプリです。だらだら開発しておりますが、自由に使っていただいて構いません。
            </div>
            <div>
                ソースコードはすべて公開されており、GoogleのFirebaseにて運営しております。
                <a href="https://github.com/mitsuo0114/tenarai">https://github.com/mitsuo0114/tenarai</a>
            </div>
            <div>
                質問・要望などはgithub、あるいはgithubにあるメールアドレスへご連絡ください。
                使っていただける方がいるのであれば、喜んで可能な限り対応します。
            </div>

            <h4>Google Analyticsについて</h4>
            <div>
            本サイトの訪問状況を把握するためにGoogle 社のサービスであるGoogle Analyticsを利用しています。Google Analyticsを利用しますと、発行するクッキーをもとにして、Google 社がお客様の本サイトの訪問履歴を収集、記録、分析します。
            本サイトの開発者は、Google 社からその分析結果を受け取り、サイトの訪問状況を把握します。
            Google Analyticsにより収集、記録、分析された情報には、特定の個人を識別する情報は一切含まれません。
            また、それらの情報は、Google社により同社のプライバシーポリシーに基づいて管理されます。
            </div>

            <div>
            ブラウザのアドオン設定でGoogle Analyticsを無効にすることにより、当社のGoogle Analytics利用によるお客様の情報の収集を停止することも可能です。
            Google Analyticsの無効設定は、Google社によるオプトアウトアドオンのダウンロードページで 「Google Analyticsオプトアウトアドオン」をダウンロードおよびインストールし、
            ブラウザのアドオン設定を変更することで実施することができます。
            なおGoogle Analyticsを無効設定した場合、本サイト以外のウェブサイトでもGoogle Analyticsは無効になりますが、ブラウザのアドオンを再設定することにより、再度Google Analyticsを有効にすることも可能です。
            </div>
            <div>
            Google Analyticsの利用規約に関する説明についてはGoogle Analyticsのサイトを、Google社のプライバシーポリシーに関する説明については同社のサイトをご覧下さい。
            </div>

            <dt>Google Analyticsの利用規約：</dt>
            <a href="http://www.google.com/analytics/terms/jp.html">http://www.google.com/analytics/terms/jp.html</a>
            <dt>Googleのプライバシーポリシー：</dt>
            <a href="http://www.google.com/intl/ja/policies/privacy/">http://www.google.com/intl/ja/policies/privacy/</a>
            <dt>Google Analyticsオプトアウトアドオン：</dt>
            <a href="https://tools.google.com/dlpage/gaoptout?hl=ja">https://tools.google.com/dlpage/gaoptout?hl=ja</a>

        </>
    );
}


export default About;
