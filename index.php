<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Анкета</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="profile-container">
        <div class="profile-header">
            <h1>Проценко Данило Павлович</h1>
            <div class="profile-photo">?</div>
        </div>
        <div class="profile-details">
            <p><strong>Вік:</strong> 18</p>
            <p><strong>Місце народження:</strong> Запоріжжя</p>
            <p><strong>Номер телефону:</strong> 453248238</p>
        </div>
    </div>

    <div class="students-list">
        <?php
        $students = [
            ["Мирослав", "Бєлєв ", 18, "Запоріжжя", "380444618061"],
            ["Олексій", "Борзенко", 18, "Київ", "380444618061"],
            ["Юлія", "Борисенко ", 18, "Львів", "380444618061"],
            ["Максим", "Борцов ", 18, "Одеса", "380444618061"],
            ["Денис", "Войцещук ", 18, "Харків", "380444618061"],
            ["Аліна", "Портна ", 18, "Полтава", "380444618061"]
        ];
        ?>

        <table>
            <thead>
                <tr>
                    <th>Ім'я</th>
                    <th>Прізвище</th>
                    <th>Вік</th>
                    <th>Місце народження</th>
                    <th>Номер телефону</th>
                </tr>
            </thead>
            <tbody>
                <?php
                foreach ($students as $student) {
                    echo "<tr>";
                    foreach ($student as $info) {
                        echo "<td>$info</td>";
                    }
                    echo "</tr>";
                }
                ?>
            </tbody>
        </table>
    </div>
</body>
</html>
