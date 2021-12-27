using Microsoft.EntityFrameworkCore.Migrations;

namespace API.Migrations
{
    public partial class addprofillingagain : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "tb_m_profilling");

            migrationBuilder.AddColumn<int>(
                name: "EducationId",
                table: "tb_m_account",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_tb_m_account_EducationId",
                table: "tb_m_account",
                column: "EducationId");

            migrationBuilder.AddForeignKey(
                name: "FK_tb_m_account_tb_m_education_EducationId",
                table: "tb_m_account",
                column: "EducationId",
                principalTable: "tb_m_education",
                principalColumn: "EducationId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_tb_m_account_tb_m_education_EducationId",
                table: "tb_m_account");

            migrationBuilder.DropIndex(
                name: "IX_tb_m_account_EducationId",
                table: "tb_m_account");

            migrationBuilder.DropColumn(
                name: "EducationId",
                table: "tb_m_account");

            migrationBuilder.CreateTable(
                name: "tb_m_profilling",
                columns: table => new
                {
                    NIK = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    EducationId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tb_m_profilling", x => x.NIK);
                    table.ForeignKey(
                        name: "FK_tb_m_profilling_tb_m_account_NIK",
                        column: x => x.NIK,
                        principalTable: "tb_m_account",
                        principalColumn: "NIK",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_tb_m_profilling_tb_m_education_EducationId",
                        column: x => x.EducationId,
                        principalTable: "tb_m_education",
                        principalColumn: "EducationId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_tb_m_profilling_EducationId",
                table: "tb_m_profilling",
                column: "EducationId");
        }
    }
}
