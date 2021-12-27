using Microsoft.EntityFrameworkCore.Migrations;

namespace API.Migrations
{
    public partial class UbahtypeGPA : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<float>(
                name: "GPA",
                table: "tb_m_education",
                type: "real",
                nullable: false,
                defaultValue: 0f,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "GPA",
                table: "tb_m_education",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(float),
                oldType: "real");
        }
    }
}
