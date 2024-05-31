[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=TSKGunGun_next-on-firebase&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=TSKGunGun_next-on-firebase)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=TSKGunGun_next-on-firebase&metric=bugs)](https://sonarcloud.io/summary/new_code?id=TSKGunGun_next-on-firebase)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=TSKGunGun_next-on-firebase&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=TSKGunGun_next-on-firebase)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=TSKGunGun_next-on-firebase&metric=coverage)](https://sonarcloud.io/summary/new_code?id=TSKGunGun_next-on-firebase)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=TSKGunGun_next-on-firebase&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=TSKGunGun_next-on-firebase)

# Next-BackEnd-Test
Nextアプリケーション単独でSaasを実装するための検証リポジトリです。

#利用を想定する環境

まずは提供サービスのリリースを優先するため当初は簡易的な実装とし、
ビジネスとして発展が見込まれる場合スケールアップをしていくようなサービスの初回リリース向け想定しています。

バックエンドは組んで居ないため、このリポジトリをフォークしてRepository層でバックエンドと接続してください。

# 使用技術
* Next.js
* Firebase
* SonarCloud
* MAUI
* Zustand

# 品質について
本リポジトリはSonarCloudにて品質管理を行っています。
https://sonarcloud.io/project/overview?id=TSKGunGun_next-on-firebase

# システム仕様について

# ホスティングについて
システムはFirebase AppHostigにてホスティングされます。


## ユーザー認証
FirebaseのAuthenticationを利用します。

# 構造
## データのやり取りについて
データのやり取りはNext単独→APIサーバー利用などのスケールアップを考慮し、
オニオンアーキテクチャ的にModel層, Service層、Repository層に分割し、

* Model層はビジネスロジック、アプリケーションロジックを実装しフロントで利用する機能を提供します。
* Service層はビジネスロジックに関わるふるまいを実装し、Model層で利用する機能を提供します。
* Repository層はデータアクセスを管理します。
* 各層は1つ以下の層に依存します。（かならず1つ下の層でなくてもいい)

  ```mermaid
  graph TD
    DB[DB]
    ExternalService[外部サービス等]
    Repository[Repository]
    Service[Service]
    Model[Model]
    UI[UI]

    UI --> Model
    UI --> Service
    UI --> Repository
    UI --> ExternalService
    Model --> Service
    Model --> Repository
    Service --> Repository
    Repository --> DB
    Repository --> ExternalService
  ```

各階層は各Types.d.tsで定義したインターフェースを利用してやり取りを行います。
※厳密なやり取りが必要な場合はインターフェースではなくtypeで定義することがあります。

APIサーバー化した場合はRepository層を変更することで、ビジネスロジック上で大きな変更無くスケールアップできるようにしています。

# テスト
