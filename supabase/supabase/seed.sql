INSERT INTO
  "auth"."users" (
    "instance_id",
    "id",
    "aud",
    "role",
    "email",
    "encrypted_password",
    "email_confirmed_at",
    "invited_at",
    "confirmation_token",
    "confirmation_sent_at",
    "recovery_token",
    "recovery_sent_at",
    "email_change_token_new",
    "email_change",
    "email_change_sent_at",
    "last_sign_in_at",
    "raw_app_meta_data",
    "raw_user_meta_data",
    "is_super_admin",
    "created_at",
    "updated_at",
    "phone",
    "phone_confirmed_at",
    "phone_change",
    "phone_change_token",
    "phone_change_sent_at",
    "email_change_token_current",
    "email_change_confirm_status",
    "banned_until",
    "reauthentication_token",
    "reauthentication_sent_at",
    "is_sso_user",
    "deleted_at",
    "is_anonymous"
  )
VALUES
  (
    '00000000-0000-0000-0000-000000000000',
    '3348d7bd-c90f-455c-865b-0c5a0e17ea22',
    'authenticated',
    'authenticated',
    'suguru.ueda@lbose.co.jp',
    '$2a$10$z.DPVqu51TVV/gPtHmTXIexUwKEAUSC.w6uBIWdo8h9p.m3Q56JF6',
    '2024-06-05 12:10:41.355463+00',
    NULL,
    '',
    NULL,
    '',
    NULL,
    '',
    '',
    NULL,
    '2024-06-05 12:10:46.531916+00',
    '{"provider": "email", "providers": ["email"]}',
    '{}',
    NULL,
    '2024-06-05 12:10:41.352157+00',
    '2024-06-05 12:10:46.533617+00',
    NULL,
    NULL,
    '',
    '',
    NULL,
    '',
    0,
    NULL,
    '',
    NULL,
    false,
    NULL,
    false
  ),
  (
    '00000000-0000-0000-0000-000000000000',
    '2dc33c46-3c3e-48e8-a483-090381d95733',
    'authenticated',
    'authenticated',
    'taro.yamada@example.com',
    '$2a$10$FUQDKC0G86Z6CGi2FsbTDuW0md6maRJX/ed9GRBdcIQMV7o1zxiOC',
    '2024-06-05 12:11:10.99368+00',
    NULL,
    '',
    NULL,
    '',
    NULL,
    '',
    '',
    NULL,
    NULL,
    '{"provider": "email", "providers": ["email"]}',
    '{}',
    NULL,
    '2024-06-05 12:11:10.991483+00',
    '2024-06-05 12:11:10.993811+00',
    NULL,
    NULL,
    '',
    '',
    NULL,
    '',
    0,
    NULL,
    '',
    NULL,
    false,
    NULL,
    false
  );

INSERT INTO
  "auth"."identities" (
    "provider_id",
    "user_id",
    "identity_data",
    "provider",
    "last_sign_in_at",
    "created_at",
    "updated_at",
    "id"
  )
VALUES
  (
    '3348d7bd-c90f-455c-865b-0c5a0e17ea22',
    '3348d7bd-c90f-455c-865b-0c5a0e17ea22',
    '{"sub": "3348d7bd-c90f-455c-865b-0c5a0e17ea22", "email": "suguru.ueda@lbose.co.jp", "email_verified": false, "phone_verified": false}',
    'email',
    '2024-06-05 12:10:41.353438+00',
    '2024-06-05 12:10:41.353468+00',
    '2024-06-05 12:10:41.353468+00',
    '100715a6-543a-4df9-b649-54094f6c4c3b'
  ),
  (
    '2dc33c46-3c3e-48e8-a483-090381d95733',
    '2dc33c46-3c3e-48e8-a483-090381d95733',
    '{"sub": "2dc33c46-3c3e-48e8-a483-090381d95733", "email": "taro.yamada@example.com", "email_verified": false, "phone_verified": false}',
    'email',
    '2024-06-05 12:11:10.992344+00',
    '2024-06-05 12:11:10.992367+00',
    '2024-06-05 12:11:10.992367+00',
    '290d9539-1046-43e6-8d30-6096712d317a'
  );

INSERT INTO
  public.user_infos(id, name, icon_url, created_at)
VALUES
  (
    '2dc33c46-3c3e-48e8-a483-090381d95733',
    'Taro Yamada',
    'https://picsum.photos/200',
    '2024-06-03 10:01:59.026699+00'
  ),
  (
    '3348d7bd-c90f-455c-865b-0c5a0e17ea22',
    'Suguru Ueda',
    'https://picsum.photos/200',
    '2024-06-03 10:01:59.026699+00'
  );

INSERT INTO
  public.posts(user_id, message, created_at, updated_at)
VALUES
  (
    '3348d7bd-c90f-455c-865b-0c5a0e17ea22',
    'こんにちは',
    '2024-06-03 10:01:59.026699+00',
    '2024-06-03 10:01:59.026699+00'
  ),
  (
    '2dc33c46-3c3e-48e8-a483-090381d95733',
    'テスト投稿',
    '2024-06-03 10:01:59.026699+00',
    '2024-06-03 10:01:59.026699+00'
  )