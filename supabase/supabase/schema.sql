SET session_replication_role = replica;

--
-- PostgreSQL database dump
--

-- Dumped from database version 15.1 (Ubuntu 15.1-1.pgdg20.04+1)
-- Dumped by pg_dump version 15.6 (Ubuntu 15.6-1.pgdg20.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: audit_log_entries; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."audit_log_entries" ("instance_id", "id", "payload", "created_at", "ip_address") VALUES
	('00000000-0000-0000-0000-000000000000', 'db6ea340-0b50-459e-8c75-3632872bd6c8', '{"action":"user_signedup","actor_id":"00000000-0000-0000-0000-000000000000","actor_username":"service_role","actor_via_sso":false,"log_type":"team","traits":{"user_email":"suguru.ueda@lbose.co.jp","user_id":"3348d7bd-c90f-455c-865b-0c5a0e17ea22","user_phone":""}}', '2024-06-05 12:10:41.35428+00', ''),
	('00000000-0000-0000-0000-000000000000', '9a0ca5ec-0d67-463f-aeb6-082b34c80d38', '{"action":"login","actor_id":"3348d7bd-c90f-455c-865b-0c5a0e17ea22","actor_username":"suguru.ueda@lbose.co.jp","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-06-05 12:10:46.531408+00', ''),
	('00000000-0000-0000-0000-000000000000', 'db1e4b31-2ec8-43d0-983f-0f16a4fd1f56', '{"action":"user_signedup","actor_id":"00000000-0000-0000-0000-000000000000","actor_username":"service_role","actor_via_sso":false,"log_type":"team","traits":{"user_email":"taro.yamada@example.com","user_id":"2dc33c46-3c3e-48e8-a483-090381d95733","user_phone":""}}', '2024-06-05 12:11:10.992912+00', '');


--
-- Data for Name: flow_state; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: users; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."users" ("instance_id", "id", "aud", "role", "email", "encrypted_password", "email_confirmed_at", "invited_at", "confirmation_token", "confirmation_sent_at", "recovery_token", "recovery_sent_at", "email_change_token_new", "email_change", "email_change_sent_at", "last_sign_in_at", "raw_app_meta_data", "raw_user_meta_data", "is_super_admin", "created_at", "updated_at", "phone", "phone_confirmed_at", "phone_change", "phone_change_token", "phone_change_sent_at", "email_change_token_current", "email_change_confirm_status", "banned_until", "reauthentication_token", "reauthentication_sent_at", "is_sso_user", "deleted_at", "is_anonymous") VALUES
	('00000000-0000-0000-0000-000000000000', '3348d7bd-c90f-455c-865b-0c5a0e17ea22', 'authenticated', 'authenticated', 'suguru.ueda@lbose.co.jp', '$2a$10$z.DPVqu51TVV/gPtHmTXIexUwKEAUSC.w6uBIWdo8h9p.m3Q56JF6', '2024-06-05 12:10:41.355463+00', NULL, '', NULL, '', NULL, '', '', NULL, '2024-06-05 12:10:46.531916+00', '{"provider": "email", "providers": ["email"]}', '{}', NULL, '2024-06-05 12:10:41.352157+00', '2024-06-05 12:10:46.533617+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false),
	('00000000-0000-0000-0000-000000000000', '2dc33c46-3c3e-48e8-a483-090381d95733', 'authenticated', 'authenticated', 'taro.yamada@example.com', '$2a$10$FUQDKC0G86Z6CGi2FsbTDuW0md6maRJX/ed9GRBdcIQMV7o1zxiOC', '2024-06-05 12:11:10.99368+00', NULL, '', NULL, '', NULL, '', '', NULL, NULL, '{"provider": "email", "providers": ["email"]}', '{}', NULL, '2024-06-05 12:11:10.991483+00', '2024-06-05 12:11:10.993811+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false);


--
-- Data for Name: identities; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."identities" ("provider_id", "user_id", "identity_data", "provider", "last_sign_in_at", "created_at", "updated_at", "id") VALUES
	('3348d7bd-c90f-455c-865b-0c5a0e17ea22', '3348d7bd-c90f-455c-865b-0c5a0e17ea22', '{"sub": "3348d7bd-c90f-455c-865b-0c5a0e17ea22", "email": "suguru.ueda@lbose.co.jp", "email_verified": false, "phone_verified": false}', 'email', '2024-06-05 12:10:41.353438+00', '2024-06-05 12:10:41.353468+00', '2024-06-05 12:10:41.353468+00', '100715a6-543a-4df9-b649-54094f6c4c3b'),
	('2dc33c46-3c3e-48e8-a483-090381d95733', '2dc33c46-3c3e-48e8-a483-090381d95733', '{"sub": "2dc33c46-3c3e-48e8-a483-090381d95733", "email": "taro.yamada@example.com", "email_verified": false, "phone_verified": false}', 'email', '2024-06-05 12:11:10.992344+00', '2024-06-05 12:11:10.992367+00', '2024-06-05 12:11:10.992367+00', '290d9539-1046-43e6-8d30-6096712d317a');


--
-- Data for Name: instances; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sessions; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."sessions" ("id", "user_id", "created_at", "updated_at", "factor_id", "aal", "not_after", "refreshed_at", "user_agent", "ip", "tag") VALUES
	('2bae4c51-8f6f-437f-8243-a401e442448d', '3348d7bd-c90f-455c-865b-0c5a0e17ea22', '2024-06-05 12:10:46.531958+00', '2024-06-05 12:10:46.531958+00', NULL, 'aal1', NULL, NULL, 'node', '172.20.0.1', NULL);


--
-- Data for Name: mfa_amr_claims; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."mfa_amr_claims" ("session_id", "created_at", "updated_at", "authentication_method", "id") VALUES
	('2bae4c51-8f6f-437f-8243-a401e442448d', '2024-06-05 12:10:46.534028+00', '2024-06-05 12:10:46.534028+00', 'password', '4c09fdea-a0ad-4370-ae99-47b8b0be5623');


--
-- Data for Name: mfa_factors; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: mfa_challenges; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: one_time_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: refresh_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."refresh_tokens" ("instance_id", "id", "token", "user_id", "revoked", "created_at", "updated_at", "parent", "session_id") VALUES
	('00000000-0000-0000-0000-000000000000', 1, 'YYW9r_57S4yyzTt7IVV6mQ', '3348d7bd-c90f-455c-865b-0c5a0e17ea22', false, '2024-06-05 12:10:46.532761+00', '2024-06-05 12:10:46.532761+00', NULL, '2bae4c51-8f6f-437f-8243-a401e442448d');


--
-- Data for Name: sso_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: saml_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: saml_relay_states; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sso_domains; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: key; Type: TABLE DATA; Schema: pgsodium; Owner: supabase_admin
--



--
-- Data for Name: user_infos; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: posts; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: buckets; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: objects; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: s3_multipart_uploads; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: s3_multipart_uploads_parts; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: hooks; Type: TABLE DATA; Schema: supabase_functions; Owner: supabase_functions_admin
--



--
-- Data for Name: secrets; Type: TABLE DATA; Schema: vault; Owner: supabase_admin
--



--
-- Name: refresh_tokens_id_seq; Type: SEQUENCE SET; Schema: auth; Owner: supabase_auth_admin
--

SELECT pg_catalog.setval('"auth"."refresh_tokens_id_seq"', 1, true);


--
-- Name: key_key_id_seq; Type: SEQUENCE SET; Schema: pgsodium; Owner: supabase_admin
--

SELECT pg_catalog.setval('"pgsodium"."key_key_id_seq"', 1, false);


--
-- Name: posts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."posts_id_seq"', 1, false);


--
-- Name: hooks_id_seq; Type: SEQUENCE SET; Schema: supabase_functions; Owner: supabase_functions_admin
--

SELECT pg_catalog.setval('"supabase_functions"."hooks_id_seq"', 1, false);


--
-- PostgreSQL database dump complete
--

RESET ALL;
