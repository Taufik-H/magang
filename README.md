# magang

# Git Commit Standard (Conventional Commits)

Standar penulisan commit yang direkomendasikan adalah **Conventional Commits**. Standar ini membuat riwayat commit lebih konsisten, mudah dibaca, dan mendukung otomatisasi seperti changelog serta semantic versioning.

## Format Commit

```text
<type>[optional scope]: <description>

[optional body]

[optional footer]
```

### Contoh

```bash
feat(auth): add Google login support
```

- **type** : Jenis perubahan.
- **scope** : Bagian proyek yang diubah (opsional).
- **description** : Ringkasan singkat perubahan.

---

# Commit Types

## `feat`

Menambahkan fitur baru.

```bash
feat: add user profile page
```

```bash
feat(auth): implement JWT authentication
```

---

## `fix`

Memperbaiki bug.

```bash
fix: resolve login validation bug
```

---

## `docs`

Perubahan hanya pada dokumentasi.

```bash
docs: update installation guide
```

---

## `style`

Perubahan format kode tanpa mengubah logika program.

Contohnya:

- Format kode
- Indentasi
- Spasi
- Titik koma
- Urutan import

```bash
style: format code using prettier
```

---

## `refactor`

Mengubah struktur kode tanpa mengubah perilaku aplikasi.

Contohnya:

- Memecah function
- Rename variabel
- Memindahkan file
- Membersihkan kode

```bash
refactor: simplify authentication service
```

---

## `perf`

Optimasi performa.

```bash
perf: optimize image loading
```

---

## `test`

Menambah atau memperbaiki pengujian.

```bash
test: add unit tests for user service
```

---

## `build`

Perubahan terkait proses build atau dependency.

```bash
build: upgrade vite to latest version
```

---

## `ci`

Perubahan pada konfigurasi CI/CD.

```bash
ci: add GitHub Actions workflow
```

---

## `chore`

Pekerjaan rutin yang tidak termasuk kategori lain.

Contohnya:

- Update `.gitignore`
- Update tooling
- Rename folder
- Membersihkan file

```bash
chore: update eslint configuration
```

---

## `revert`

Membatalkan commit sebelumnya.

```bash
revert: revert login feature
```

---

# Scope

Scope menunjukkan bagian proyek yang diubah.

Contoh:

```bash
feat(auth): add refresh token
```

```bash
fix(api): handle timeout error
```

```bash
docs(readme): update setup instructions
```

Scope bersifat opsional namun sangat disarankan pada proyek besar.

---

# Description

Gunakan kalimat singkat dan jelas.

Disarankan menggunakan bentuk **imperative** (kata kerja dasar).

### Baik

```text
add login page
```

```text
fix validation error
```

```text
remove unused imports
```

### Kurang Baik

```text
added login page
```

```text
fixed bug
```

```text
changes
```

---

# Body (Opsional)

Digunakan untuk menjelaskan perubahan yang lebih kompleks.

```text
feat(payment): support QRIS payment

Implement QRIS payment using Midtrans Snap API.
The payment status is updated through webhook callbacks.
```

---

# Footer

Digunakan untuk informasi tambahan.

```text
BREAKING CHANGE: remove old authentication API
```

atau

```text
Closes #25
```

---

# Breaking Change

Jika perubahan tidak kompatibel dengan versi sebelumnya, gunakan tanda `!`.

```bash
feat!: remove legacy authentication
```

atau

```bash
feat(api)!: redesign response structure
```

---

# Contoh Riwayat Commit

```bash
feat(auth): add JWT authentication

fix(auth): prevent expired token access

docs: update API documentation

refactor(user): simplify validation logic

test(auth): add login unit tests

ci: add GitHub Actions workflow

chore: update dependencies
```

---

# Perbedaan Commit Type

| Type       | Digunakan Untuk                                |
| ---------- | ---------------------------------------------- |
| `feat`     | Menambahkan fitur baru                         |
| `fix`      | Memperbaiki bug                                |
| `refactor` | Mengubah struktur kode tanpa mengubah perilaku |
| `style`    | Format kode tanpa mengubah logika              |
| `perf`     | Optimasi performa                              |
| `docs`     | Dokumentasi                                    |
| `test`     | Menambah atau memperbaiki pengujian            |
| `build`    | Build system atau dependency                   |
| `ci`       | Konfigurasi CI/CD                              |
| `chore`    | Tugas pemeliharaan umum                        |
| `revert`   | Membatalkan commit sebelumnya                  |

---

# Contoh Penggunaan

| Aktivitas                     | Commit                                                |
| ----------------------------- | ----------------------------------------------------- |
| Menambahkan halaman login     | `feat(auth): add login page`                          |
| Memperbaiki validasi email    | `fix(auth): validate email format correctly`          |
| Merapikan kode                | `style: format code with prettier`                    |
| Memecah service               | `refactor(user): extract business logic into service` |
| Optimasi query database       | `perf(db): optimize user query`                       |
| Update dokumentasi API        | `docs: update API usage examples`                     |
| Menambahkan unit test         | `test(auth): add login endpoint tests`                |
| Update dependency             | `build: upgrade dependencies`                         |
| Menambahkan workflow CI       | `ci: add deployment workflow`                         |
| Menghapus file tidak terpakai | `chore: remove unused assets`                         |

---

# Best Practices

- Gunakan satu commit untuk satu tujuan perubahan.
- Tulis deskripsi yang singkat dan jelas.
- Gunakan bahasa yang konsisten (umumnya Bahasa Inggris).
- Gunakan **scope** jika proyek memiliki banyak modul.
- Hindari commit seperti:
  - `update`
  - `fix`
  - `changes`
  - `asdf`

Lebih baik:

```bash
fix(auth): validate refresh token expiration
```

daripada

```bash
fix
```

---

# Referensi

- https://www.conventionalcommits.org/
