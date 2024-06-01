# Next-BackEnd-Test
Nextアプリケーション単独でSaasを実装するための検証リポジトリです。

#利用を想定する環境

まずは提供サービスのリリースを優先するため当初は簡易的な実装とし、
ビジネスとして発展が見込まれる場合スケールアップをしていくようなサービスの初回リリース向け想定しています。

# 使用技術
* Next.js
* MUI
* supabase

# 各ディレクトリについて

|ディレクトリ| 概要 |
|:---------------------|:-----------------------------------------------|
|[base](/base/)|基本実装のディレクトリです。バックエンドと接続の実装はおこなっていません。|
|[supabase](/supabase/)|supabaseと接続するパターンの実装です。|

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
    UI[UI]

    UI --> Model
    UI --> Service
    UI --> Repository
    UI --> ExternalService
    Service --> Repository
    Repository --> DB
    Repository --> ExternalService
  ```

各階層は各Types.d.tsで定義したインターフェースを利用してやり取りを行います。
※厳密なやり取りが必要な場合はインターフェースではなくtypeで定義することがあります。

APIサーバー化した場合はRepository層を変更することで、ビジネスロジック上で大きな変更無くスケールアップできるようにしています。

# メモ
* Sercvie, Repositoryはシングルトン化 or / DI化したほうが良い。
* 一旦、検証優先で上記は保留します。